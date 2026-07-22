export interface Repository<T> {
  findAll(): Promise<T[]>;

  findById(
    id: number
  ): Promise<T | null>;

  create(
    data: T
  ): Promise<T>;

  update(
    id: number,
    data: Partial<T>
  ): Promise<T>;

  delete(
    id: number
  ): Promise<void>;
}


export abstract class BaseRepository<T>
  implements Repository<T>
{

  abstract findAll(): Promise<T[]>;


  abstract findById(
    id: number
  ): Promise<T | null>;


  abstract create(
    data: T
  ): Promise<T>;


  abstract update(
    id: number,
    data: Partial<T>
  ): Promise<T>;


  abstract delete(
    id: number
  ): Promise<void>;

}
