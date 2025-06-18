<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CompanyInfoController extends Controller
{
    public function companyInfo()
    {
        $companyInfo = DB::table('company_settings')->first();
        return $companyInfo;
    }
}
