<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function index()
    {
        // $categories = DB::table('categories')
        //                 ->where('categories.active', 1)
        //                 ->join('sub_categories', 'sub_categories.cat_id', '=', 'categories.id')
        //                 ->join('subjects', 'subjects.sub_cat_id', '=', 'sub_categories.id')
        //                 ->select(
        //                     'categories.id as category_id',
        //                     'categories.name as category_name',
        //                     'sub_categories.id as subcategory_id',
        //                     'sub_categories.name as subcategory_name',
        //                     'subjects.id as subject_id',
        //                     'subjects.name as subject_name',
        //                     'categories.active',
        //                 )
        //                 ->get();

        // return $categories;
        return Category::with('subcategory')->active()->get();
        // return response()->json(['status'=>200,'categories'=>$categories]);

    }
}
