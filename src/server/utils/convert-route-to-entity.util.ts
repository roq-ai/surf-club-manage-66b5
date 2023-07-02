const mapping: Record<string, string> = {
  clubs: 'club',
  events: 'event',
  participants: 'participant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
