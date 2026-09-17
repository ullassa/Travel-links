import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type Vehicle = { name: string; seats: string; image: string; price:number; description: string };
type VehicleGroup = { id: string; name: string; vehicles: Vehicle[] };
type Tour = { destination: string; image: string; description: string; time: string };

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly cabs: Vehicle[] = [
    {
      name: 'Toyota Etios',
      seats: '4 + 1 seats',
      image: '/images/toyoto-1.jpeg',
      price: 1500,
      description: 'A quiet, comfortable pick for city rides and airport transfers.',
    },
    {
      name: 'Swift Dzire',
      seats: '4 + 1 seats',
      image: '/images/toyoto-2.jpeg',
      price:2400,
      description: 'A practical sedan for city trips, station pickups and daily travel.',
    },
    {
      name: 'Toyota Innova',
      seats: '6 + 1 seats',
      image: '/images/toyoto-3.jpeg',
      price: 3000,
      description: 'Extra space and comfort for families, airport runs and outstation trips.',
    },
    {
      name: 'Premium Sedan',
      seats: '4 + 1 seats',
      image: '/images/toyoto-5.jpeg',
      price: 3900,
      description: 'A refined option for business travel and comfortable long-distance rides.',
    },
    {
      name: 'SUV Cab',
      seats: '6 + 1 seats',
      image: '/images/toyoto-6.jpeg',
      price: 4500,
      description: 'A spacious cab for larger families and journeys with more luggage.',
    },
  ];

  protected readonly tempoTravellers: Vehicle[] = [
    {
      name: 'Tempo Traveller',
      seats: '12 + 1 seats',
      image: '/images/tempo traveller/temppo1.jpeg',
      price: 5000,
      description: 'Roomy, air-conditioned travel for families and small groups.',
    },
{
      name: 'Tempo Traveller',
      seats: '9 + 1 seats',
      image: '/images/tempo traveller/tempo 2.jpeg',
      price: 5000,
      description: 'Roomy, air-conditioned travel for families and small groups.',
    },


  ];

  protected readonly buses: Vehicle[] = [
    {
      name: 'Mini Coach',
      seats: '25 + 1 seats',
      image: '/images/bus/bus1.jpeg',
      price: 8000,
      description: 'A dependable group travel solution for longer itineraries.',
    },
      {
      name: 'Mini Coach',
      seats: '25 + 1 seats',
      image: '/images/bus/bus3.jpeg',
      price: 8000,
      description: 'A dependable group travel solution for longer itineraries.',
    },
      {
      name: 'Mini Coach',
      seats: '25 + 1 seats',
      image: '/images/bus/bus2.jpeg',
      price: 8000,
      description: 'A dependable group travel solution for longer itineraries.',
    },
  ];

  protected readonly vehicleGroups: VehicleGroup[] = [
    { id: 'cabs', name: 'Cabs', vehicles: this.cabs },
    { id: 'tempo-traveller', name: 'Tempo Travellers', vehicles: this.tempoTravellers },
    { id: 'buses', name: 'Buses', vehicles: this.buses },
  ];

  protected readonly tours: Tour[] = [
    { destination: 'Munnar', 
      time: '3 days / 2 nights',
       image: '/images/tours/munnar-1.jpg',
        description: 'Misty hills, tea gardens and the slower side of Kerala.' },
    { destination: 'Wayanad', time: '3 days / 2 nights', image: '/images/tours/wayanad.jpg', description: 'Lush forests, waterfalls and the Western Ghats at their best.' },
    { destination: 'Pondicherry', time: '2 days / 1 night', image: '/images/tours/pondicherry.jpg', description: 'French lanes, sea air and unhurried coastal mornings.' },
    { destination: 'Coorg', time: '3 days / 2 nights', image: '/images/tours/coorg.jpg', description: 'Coffee country, forest trails and generous Kodava hospitality.' },
  ];
}