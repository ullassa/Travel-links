import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type CabType = 'AC' | 'NON AC';
type Vehicle = { name: string; seats: string; image: string; price: number; description: string; isAc: boolean };
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
  protected readonly activeCabType = signal<CabType>('AC');

  protected selectCabType(type: CabType): void {
    this.activeCabType.set(type);
  }

  protected readonly cabs: Vehicle[] = [
    {
      name: 'Maruti Suzuki Dzire',
      seats: '4 + 1 seats',
      image: '/images/cabs/Maruti Suzuki Dzire-01.jpeg',
      price: 1500,
      isAc: true,
      description: 'A comfortable sedan for city rides, airport transfers and daily travel.',
    },
    {
      name: 'Maruti Suzuki Ertiga',
      seats: '6 + 1 seats',
      image: '/images/cabs/Maruti Suzuki Ertiga-01.jpeg',
      price: 2400,
      isAc: true,
      description: 'A versatile family MPV with room for passengers and luggage.',
    },
    {
      name: 'Maruti Suzuki XL6',
      seats: '6 + 1 seats',
      image: '/images/cabs/Maruti Suzuki XL6-01.jpeg',
      price: 2700,
      isAc: true,
      description: 'A spacious and refined choice for family and outstation journeys.',
    },
    {
      name: 'Maruti Suzuki Ciaz',
      seats: '4 + 1 seats',
      image: '/images/cabs/Maruti Suzuki Ciaz-01.jpeg',
      price: 2800,
      isAc: true,
      description: 'A smooth, comfortable sedan for business and long-distance travel.',
    },
    {
      name: 'Toyota Innova Crysta',
      seats: '6 + 1 seats',
      image: '/images/cabs/Toyota Innova Crysta-01.jpeg',
      price: 3500,
      isAc: true,
      description: 'A trusted, comfortable MPV for families and extended road trips.',
    },
    {
      name: 'Toyota Innova Hycross',
      seats: '6 + 1 seats',
      image: '/images/cabs/Toyota Innova Hycross-01.jpeg',
      price: 4000,
      isAc: false,
      description: 'A premium, spacious ride for comfortable family and business travel.',
    },
    {
      name: 'Toyota Rumion',
      seats: '6 + 1 seats',
      image: '/images/cabs/Toyota Rumion=01.jpeg',
      price: 2800,
      isAc: false,
      description: 'A practical MPV for city rides, airport transfers and group travel.',
    },
    {
      name: 'Kia Carens',
      seats: '6 + 1 seats',
      image: '/images/cabs/Kia Carens-01.jpeg',
      price: 3200,
      isAc: false,
      description: 'A roomy and comfortable choice for family and outstation journeys.',
    },
    {
      name: 'Kia Carnival',
      seats: '7 + 1 seats',
      image: '/images/cabs/Kia Carnival-01.jpeg',
      price: 5000,
      isAc: false,
      description: 'A premium people mover with generous space for larger groups.',
    },
  ];

  protected readonly tempoTravellers: Vehicle[] = [
    {
      name: 'Force Urbania',
      seats: '12 + 1 seats',
      image: '/images/tempo traveller/Force Urbania-01.jpeg',
      price: 5000,
      isAc: true,
      description: 'Roomy, air-conditioned travel for families and small groups.',
    },
    {
      name: 'Force Traveller',
      seats: '9 + 1 seats',
      image: '/images/tempo traveller/Force Traveller-01.jpeg',
      price: 5000,
      isAc: false,
      description: 'Roomy, air-conditioned travel for families and small groups.',
    },
    {
      name: 'Force Urbania Non AC',
      seats: '12 + 1 seats',
      image: '/images/tempo traveller/Force Urbania-01.jpeg',
      price: 4500,
      isAc: false,
      description: 'Spacious group travel for family trips and local journeys.',
    },
    {
      name: 'Force Traveller AC',
      seats: '9 + 1 seats',
      image: '/images/tempo traveller/Force Traveller-01.jpeg',
      price: 5500,
      isAc: true,
      description: 'Comfortable, air-conditioned travel for small groups.',
    },
  ];

  protected readonly buses: Vehicle[] = [
    {
      name: 'Mini Coach',
      seats: '25 + 1 seats',
      image: '/images/bus/bus1.jpeg',
      price: 8000,
      isAc: true,
      description: 'A dependable group travel solution for longer itineraries.',
    },
      {
      name: 'Mini Coach',
      seats: '25 + 1 seats',
      image: '/images/bus/bus3.jpeg',
      price: 8000,
      isAc: false,
      description: 'A dependable group travel solution for longer itineraries.',
    },
      {
      name: 'Mini Coach',
      seats: '25 + 1 seats',
      image: '/images/bus/bus2.jpeg',
      price: 8000,
      isAc: true,
      description: 'A dependable group travel solution for longer itineraries.',
    },
    {
      name: 'Mini Coach Non AC',
      seats: '25 + 1 seats',
      image: '/images/bus/bus1.jpeg',
      price: 7000,
      isAc: false,
      description: 'A dependable non-AC group travel solution for longer itineraries.',
    },
    {
      name: 'Mini Coach AC Plus',
      seats: '25 + 1 seats',
      image: '/images/bus/bus3.jpeg',
      price: 9000,
      isAc: true,
      description: 'A comfortable air-conditioned coach for group journeys.',
    },
  ];

  protected readonly filteredCabs = computed(() => this.filterVehicles(this.cabs));
  protected readonly filteredTempoTravellers = computed(() => this.filterVehicles(this.tempoTravellers));
  protected readonly filteredBuses = computed(() => this.filterVehicles(this.buses));

  private filterVehicles(vehicles: Vehicle[]): Vehicle[] {
    const showAc = this.activeCabType() === 'AC';
    return vehicles.filter((vehicle) => vehicle.isAc === showAc);
  }

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