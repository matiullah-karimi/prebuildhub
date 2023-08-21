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
            'province_id' => 'required|min:2',
            'city' => 'required|min:3',
            'address_line_1' => 'required|min:3',
            'address_line_2' => 'nullable|min:3',
            'bathroom' => 'required|integer',
            'bedroom' => 'required|integer',
            'floor' => 'nullable|integer',
            'price' => 'required|integer',
            'area' => 'required|integer',
            'zip_code' => 'required|string',
            'images' => 'array|required',
            'images.*' => 'required|file',
            'videos' => 'array|nullable',
            'videos.*' => 'nullable',
            'aminities' => 'array|nullable',
            'aminities.*' => 'nullable|exists:aminities,id',
            'property_status_id' => 'required|exists:property_statuses,id',
            'property_type_id' => 'required|exists:property_types,id',
        ];
    }
}
