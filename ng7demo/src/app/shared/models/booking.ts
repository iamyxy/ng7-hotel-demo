export class Booking {
  // ? means optional
  booking_id?: number;
  in_date: Date;
  out_date: Date;
  status: string;
  name: string;
  room: number;
  roomtype: string;
  memeber: number;
  personal_id: string;
}
