<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    public function exams()
    {
        return $this->hasMany(Exam::class,'subject_id');
    }
    public function subcategory()
    {
        return $this->belongsTo(SubCategory::class,'sub_cat_id');
    }
}
