<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Mockery\Matcher\Subset;

class SubCategory extends Model
{
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function subjects()
    {
        return $this->hasMany(Subject::class,'sub_cat_id');
    }
}
