export interface Rating {
  ratings: {
    pub: number,
    local: number,
    food: number,
    bathroom: number,
    security: number,
    lighting: number,
    lineup: number,
    stall: number,
    cleaning: number
  };
  comment: string;
}
