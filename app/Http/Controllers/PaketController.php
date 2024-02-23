<?php

namespace App\Http\Controllers;

use App\Models\Paket;
use App\Http\Requests\StorePaketRequest;
use App\Http\Requests\UpdatePaketRequest;
use App\Models\Customer;
use Inertia\Inertia;
use Inertia\Response;

class PaketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Admin/Paket', [
            "paket" => Paket::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePaketRequest $request)
    {
        $validate = $request->validate([
            'nama_paket' => "required|max:255",
            "harga" => "required|max:255",
        ]);

        Paket::create($validate);

        return Inertia::render('Admin/Paket', [
            "paket" => Paket::get()
        ])->with("success", "New paket has been added!");
    }

    /**
     * Display the specified resource.
     */
    public function show(Paket $paket)
    {
        return Inertia::render('Admin/Paket', [
            "paket" => Paket::get()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Paket $paket)
    {
        return Inertia::render('Admin/EditPaket', [
            "paket" => $paket,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePaketRequest $request, Paket $paket)
    {
        $validate = $request->validate([
            'nama_paket' => "required|max:255",
            "harga" => "required|max:255",
        ]);

        Paket::where('id', $paket->id)
            ->update($validate);

        return Inertia::render('Admin/Paket', [
            "paket" => Paket::get()
        ])->with("success", "Paket has been updated!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Paket $paket)
    {

        $paket::destroy($paket->id);

        return Inertia::render('Admin/Paket', [
            "paket" => Paket::get()
        ])->with("success", "Paket has been deleted!");
    }

    public function viewPDF()
    {
        $customer = Customer::with('paket')->get();
        $totalHarga = $customer->sum(function ($c) {
            return $c->paket->harga;
        });

        return Inertia::render('Admin/ViewPDF', [
            "customer" => $customer,
            "totalHarga" => $totalHarga
        ]);
    }
}
