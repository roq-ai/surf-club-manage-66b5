import { UserInterface } from 'interfaces/user';
import { EventInterface } from 'interfaces/event';
import { GetQueryInterface } from 'interfaces';

export interface ParticipantInterface {
  id?: string;
  user_id?: string;
  event_id?: string;
  status?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  event?: EventInterface;
  _count?: {};
}

export interface ParticipantGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  event_id?: string;
  status?: string;
}
