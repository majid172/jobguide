<?php

use App\Http\Controllers\api\v1\AboutController;
use App\Http\Controllers\api\v1\auth\AuthController;
use App\Http\Controllers\api\v1\BookController;
use App\Http\Controllers\api\v1\CategoryController;
use App\Http\Controllers\api\v1\CompanyInfoController;
use App\Http\Controllers\api\v1\CourseController;
use App\Http\Controllers\api\v1\NoticeController;
use App\Http\Controllers\api\v1\PrivacyController;
use App\Http\Controllers\api\v1\TeacherController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     // return $request->user();
//     // Route::post('/logout', [AuthController::class, 'logout']);
// })->middleware('auth:sanctum');

Route::prefix('v1')->group(function () {
    // auth
    Route::prefix('auth')->group(function(){
        Route::post('/login',[AuthController::class,'login']);

        Route::middleware(['auth:sanctum'])->group(function () {
            Route::post('/logout', [AuthController::class, 'logout']);
        });
    });
    
    Route::get('about', [AboutController::class, 'aboutInfo']);
    Route::get('company-info', [CompanyInfoController::class, 'companyInfo']);
    Route::get('categories', [CategoryController::class, 'index']);
    Route::get('courses', [CourseController::class, 'index']);
    Route::get('teachers', [TeacherController::class, 'index']);
    Route::get('books', [BookController::class, 'books']);
    Route::get('notice', [NoticeController::class, 'notice']);
    Route::get('privacy-policy', [PrivacyController::class, 'privacy']);

    
});

