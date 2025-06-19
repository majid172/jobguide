<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }
    
    public function subcategory()
    {
        return $this->hasMany(SubCategory::class,'cat_id');
    }

    // public function subCategories()
    // {
    //     return $this->hasMany(SubCategory::class,'cat_id');
    // }
    public function subjects()
    {
        return $this->hasMany(Subject::class,'category_id');
    }
}
