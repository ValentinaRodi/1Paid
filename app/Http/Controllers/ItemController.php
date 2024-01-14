<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller as Controller;
use App\Models\Item;

class ItemController extends Controller
{
    use AuthorizesRequests, ValidatesRequests;

    function get() {
        $items = Item::all()->toArray();
        return response()->json($items);
    }

    function getOne($id) {
//        return view('index');
    }

    function post(Request $request) {
        print_r($request->json());
//        return view('index');
    }
}
