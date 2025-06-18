<?php

namespace App\Http\Controllers\api\v1\user;

use App\Http\Controllers\Controller;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        return 'dashboard';
    }
    public function subcategory($id)
    {
        $subcategory = SubCategory::where('cat_id',$id)->with('subjects')->get();
        return $subcategory;
    }
}
