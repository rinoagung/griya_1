<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'id_pegawai' => 'admin_rino',
            'password' => '$2y$12$hsmjknjb3O86hoMycpncJeb6ylMWR1vA998Y4CMkZZoxeEes1sTwq',
            'role' => 'admin',
        ]);
        User::create([
            'id_pegawai' => 'sales_rino',
            'password' => '$2y$12$hsmjknjb3O86hoMycpncJeb6ylMWR1vA998Y4CMkZZoxeEes1sTwq',
            'role' => 'sales',
        ]);
    }
}
