import { RESTDataSource } from '@apollo/datasource-rest';

export class TrackAPI extends RESTDataSource {
  baseURL: string = 'https://odyssey-lift-off-rest-api.herokuapp.com/';

  getTracksForHome(): Promise<any> {
    return this.get('tracks');
  }

  getAuthor(authorId: string): Promise<any> {
    return this.get(`author/${authorId}`);
  }
}
