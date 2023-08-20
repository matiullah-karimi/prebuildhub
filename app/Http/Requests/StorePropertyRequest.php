<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePropertyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|min:3',
            'description' => 'required|string|min:10',
            'state' => 'required|min:3',
            'city' => 'required|min:3',
            'address_line_1' => 'required|min:3',
            'address_line_2' => 'nullable|min:3',
            'bathroom' => 'required|integer',
            'bedroom' => 'required|integer',
            'floor' => 'required|integer',
            'price' => 'required|integer',
            'area' => 'required|integer',
            'zip_code' => 'required|integer',
            'images' => 'array|required',
            'images.*' => 'required',
            'videos' => 'array|nullable',
            'videos.*' => 'nullable',
            'amenities' => 'array|nullable',
            'property_status_id' => 'required|exists:property_statuses,id',
            'property_type_id' => 'required|exists:property_types,id',
        ];
    }
}
