<?php

namespace App\Http\Controllers\api\v1\user;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Exam;
use App\Models\SubCategory;
use App\Models\Subject;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        return 'dashboard';
    }
    public function subcategory($id)
    {
        $category = Category::findOrFail($id);
        $subcategory = SubCategory::where('cat_id', $id)->with('subjects')->get();
        return response()->json([
            'category' => $category,
            'subcategory' => $subcategory
        ]);
    }
    public function subjects($sub_cat_id)
    {
        $subcategory = SubCategory::find($sub_cat_id);
        $subjects = Subject::where('sub_cat_id', $sub_cat_id)->with('exams')->get();
        return response()->json([
            'subcategory' => $subcategory,
            'subjects' => $subjects,
        ]);
    }
    public function exams($subject_id)
    {

        $subject = Subject::where('id', $subject_id)->with('subcategory.category')
            ->whereHas('subcategory', function ($q) {
                $q->where('active', 1);
            })
            ->first();
        $mcqexams = Exam::where('subject_id', $subject_id)->where('mcq_written','mcq')->with('subject.subcategory.category')->where('active',1)->get();
        $writtenexams = Exam::where('subject_id', $subject_id)->where('mcq_written','written')->get();
        return response()->json([
            'subject' => $subject,
            'mcqexams' => $mcqexams,
            'writtenexams' => $writtenexams
        ]);
    }
}
