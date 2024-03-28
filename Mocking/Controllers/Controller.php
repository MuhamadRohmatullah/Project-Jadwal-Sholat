<?php

namespace Mocking\Controllers;

use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    public function getJadwal(){
        $path = base_path()."/Mocking/Json/getJadwal.json";
        $json = json_decode(file_get_contents($path), true);
        return response()->json($json);
    }
}