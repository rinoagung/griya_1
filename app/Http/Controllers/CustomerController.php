<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Paket;
use App\Models\Customer;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Sales/ManageCustomers', [
            "customers" => Customer::latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Sales/AddCustomers', [
            "paket" => Paket::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCustomerRequest $request)
    {
        $validateData = $request->validate([
            'id_paket' => 'max:64',
            'nama' => 'required|max:64',
            'no_telp' => 'max:32|starts_with:62',
            'alamat' => 'max:255',
            'foto_rumah' => 'image|file|max:2048',
            'foto_ktp' => 'image|file|max:2048',
        ]);

        if ($request->file("foto_rumah")) {
            $validateData['foto_rumah'] = $request->file("foto_rumah")->store("gambar");
        }
        if ($request->file("foto_ktp")) {
            $validateData['foto_ktp'] = $request->file("foto_ktp")->store("gambar");
        }

        Customer::create($validateData);
        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer)
    {
        return Inertia::render('Sales/Customers', [
            "customer" => $customer,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Customer $customer)
    {
        return Inertia::render('Sales/EditCustomers', [
            "customer" => $customer,
            "paket" => Paket::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCustomerRequest $request, Customer $customer)
    {

        $validateData = $request->validate([
            'id_paket' => 'max:64',
            'nama' => 'max:64',
            'no_telp' => 'max:32|starts_with:62',
            'alamat' => 'max:255',
        ]);


        if ($request->file("foto_rumah")) {
            var_dump($validateData['nama']);
            die;
            $request->validate([
                'foto_rumah' => 'image|max:2048',
            ]);
            if ($request->old_foto_rumah) {
                Storage::delete($request->old_foto_rumah);
            }
            $validateData['foto_rumah'] = $request->file("foto_rumah")->store("gambar");
        }

        if ($request->file("foto_ktp")) {
            $request->validate([
                'foto_ktp' => 'image|max:2048',
            ]);
            if ($request->old_foto_ktp) {
                Storage::delete($request->old_foto_ktp);
            }
            $validateData['foto_ktp'] = $request->file("foto_ktp")->store("gambar");
        }

        Customer::where('id', $customer->id)
            ->update($validateData);

        return Inertia::render('Sales/EditCustomers', [
            'errors' => session()->get('errors') ? session('errors')->all() : (object) [],
            "customer" => $customer,
            "paket" => Paket::all()
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        if ($customer->foto_ktp) {
            Storage::delete($customer->foto_ktp);
        }
        if ($customer->foto_rumah) {
            Storage::delete($customer->foto_rumah);
        }
        $customer::destroy($customer->id);
        return back();
    }
}
