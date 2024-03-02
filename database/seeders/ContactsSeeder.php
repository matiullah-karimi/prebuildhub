<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $contactsJson = json_decode(file_get_contents(__DIR__ . "/../data/contacts.json"));

        foreach($contactsJson as $contact) {
            Contact::create([
                'name' => $contact->firstName . ' ' . $contact->lastName,
                'email' => $contact->email ?? 'N/A',
                'phone' => $contact->phone,
                'subject' => substr($contact->project, 0, 64) ?? 'N/A',
                'message' => 'This is your personal contact',
                'category' => 'All'
            ]);

            echo $contact->firstName;
        }
    }
}
