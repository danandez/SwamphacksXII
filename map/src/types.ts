export interface CampusEvent {
  id: number;
  title: string;
  lat: number;
  lng: number;
  time: string;
  description: string;
  tags: string[];
  food: boolean;
}
