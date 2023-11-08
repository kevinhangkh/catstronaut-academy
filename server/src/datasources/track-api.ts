import { RESTDataSource } from '@apollo/datasource-rest';

import { TrackModel, AuthorModel } from '../models';
export class TrackAPI extends RESTDataSource {
  baseURL: string = 'https://odyssey-lift-off-rest-api.herokuapp.com/';

  getTracksForHome(): Promise<any> {
    return this.get<TrackModel>('tracks');
  }

  getAuthor(authorId: string): Promise<any> {
    return this.get<AuthorModel>(`author/${authorId}`);
  }
}
