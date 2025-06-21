<?php

namespace App\Http\Controllers\api\v1\user;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;

class McqExamController extends Controller
{
    public function index($id)
    {
        $userID = Cookie::get('user_id');
        // Get exam and related category info
        $examInfo = DB::table('exams')
            ->join('categories', 'exams.catID', '=', 'categories.id')
            ->select(
                'exams.*',
                'categories.*',
                'exams.id as exam_id',
                'categories.id as catID',
                'categories.free_paid as cat_free_paid'
            )
            ->where('exams.id', $id)
            ->where('exams.active', 1)
            ->first();

        // If exam not found or inactive
        if (!$examInfo) {
            return response()->json([
                'status' => false,
                'message' => 'Exam is not active or does not exist!'
            ], 404);
        }

        // Fetch questions
        $questions = DB::table('mcq_questions')->where('examID', $examInfo->exam_id)->get();

        // Fetch order info (note: checking using category ID due to your comment)
        $ordersInfo = DB::table('orders')
            ->where('userID', $userID)
            ->where('examID', $examInfo->catID) // category ID used as examID reference
            ->first();

        // Free exam: allow access directly
        if ($examInfo->cat_free_paid === 'free') {
            return response()->json([
                'status' => true,
                'access' => 'free',
                'examInfo' => $examInfo,
                'questions' => $questions,
                'userID' => $userID,
            ]);
        }

        // Paid exam logic
        if ($examInfo->cat_free_paid === 'paid') {
            if (!empty($ordersInfo)) {
                return response()->json([
                    'status' => true,
                    'access' => 'paid',
                    'examInfo' => $examInfo,
                    'questions' => $questions,
                    'userID' => $userID,
                ]);
            } else {
                // User didn't purchase the exam
                $catInfo = DB::table('categories')->where('id', $examInfo->catID)->first();

                return response()->json([
                    'status' => false,
                    'access' => 'denied',
                    'message' => 'Payment required for this exam.',
                    'catInfo' => $catInfo,
                    'userID' => $userID,
                ], 403);
            }
        }

        // Fallback response
        return response()->json([
            'status' => false,
            'message' => 'Unexpected error occurred.',
        ], 500);
    }
}
