export type Tag = {
  name: string;
  /**
   * Starting point on the image for the tag
   */
  start: {
    x: number;
    y: number;
  };
  /**
   * Ending point on the image for the tag
   */
  end: {
    x: number;
    y: number;
  };
  longitude: number;
  latitude: number;
  altitude: number;
};
