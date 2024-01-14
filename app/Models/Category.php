<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = "category";

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'lang_id',
        'game_id',
        'name',
        'sort',
    ];

    public function items()
    {
        return $this->hasMany(Item::class);
    }

    public function game()
    {
        return $this->belongsTo(Game::class);
    }
}
