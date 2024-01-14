<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use App\Http\Requests\CategoryPostRequest;
use App\Http\Controllers\Controller as Controller;
use App\Models\{
    Category,
    Item,
    Lang
};

class CategoryController extends Controller
{
    use AuthorizesRequests, ValidatesRequests;

    function get($id) { //$id - id игры
        $items = Item::all()->toArray();
        var_dump($items);
        return response()->json($items);
    }

    function getOne($id) {
//        return view('index');
    }

    function post(CategoryPostRequest $request) {
        $lang = Lang::create($request->safe()->only(['russian', 'english']));
        $category = Category::create(array_merge($request->safe()->only(['name', 'sort', 'game_id']), ['lang_id' => $lang->id]));
        return response()->json($category->toArray());
    }
}
