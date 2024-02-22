<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCustomerRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id_paket' => 'max:255',
            'nama' => 'required|max:255',
            'no_telp' => 'max:255',
            'alamat' => 'max:255',
            'foto_rumah' => 'required|max:255',
            'foto_ktp' => 'required|max:255',
        ];
    }
}
