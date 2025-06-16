<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
    protected $table = "notice";
    public function scopeActive($query)
    {
        return $query->where('active',1);
    }
}
