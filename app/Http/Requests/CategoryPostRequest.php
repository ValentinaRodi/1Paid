<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategoryPostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'russian' => ['string', 'max:190'],
            //'english' => ['string', 'max:190'],
            'name' => ['required', 'string', 'max:190'],
            'sort' => ['integer'],
            'game_id' => 'exists:App\Models\Game,id'
        ];
    }
}
