<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use App\Http\Controllers\Controller as Controller;
//use Illuminate\View\View;

class MainController extends Controller
{
    use AuthorizesRequests, ValidatesRequests;

    function index() {
        return view('index');
    }

    function landing() {
        return view('landing');
    }

}
