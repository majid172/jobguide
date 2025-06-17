<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Models\AboutInfo;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function aboutInfo()
    {
        return AboutInfo::first();
    }
}
