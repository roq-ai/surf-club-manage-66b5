import { ParticipantInterface } from 'interfaces/participant';
import { ClubInterface } from 'interfaces/club';
import { GetQueryInterface } from 'interfaces';

export interface EventInterface {
  id?: string;
  name: string;
  club_id?: string;
  created_at?: any;
  updated_at?: any;
  participant?: ParticipantInterface[];
  club?: ClubInterface;
  _count?: {
    participant?: number;
  };
}

export interface EventGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  club_id?: string;
}
