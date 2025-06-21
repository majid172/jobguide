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
use App\Http\Controllers\api\v1\user\DashboardController;
use App\Http\Controllers\api\v1\user\McqExamController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::prefix('v1')->group(function () {
    // auth
    Route::prefix('auth')->group(function(){
        Route::post('/login',[AuthController::class,'login']);

        Route::middleware(['auth:sanctum'])->group(function () {
            Route::get('/dashboard',[DashboardController::class,'index']);
            Route::get('/subcategories/{id}',[DashboardController::class,'subcategory']);
            Route::get('/subcategory-to-subjects/{sub_cat_id}',[DashboardController::class,'subjects']);
            Route::get('/subject-to-exams/{subject_id}',[DashboardController::class,'exams']);
            Route::get('/start-mcq-exam/{id}',[McqExamController::class,'index']);
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
