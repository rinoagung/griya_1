<?php

namespace Database\Seeders;

use App\Models\Paket;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PaketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Paket::create([
            'nama_paket' => 'Home 1',
            'harga' => '100000',
        ]);
        Paket::create([
            'nama_paket' => 'Home 2',
            'harga' => '150000',
        ]);
        Paket::create([
            'nama_paket' => 'Home 3',
            'harga' => '200000',
        ]);
    }
}
