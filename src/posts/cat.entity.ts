import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("post")
class Post {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public color: string;

  @Column()
  public breed: string;

  @Column()
  public age: number;

  @Column("text", {array: true})
  public photos: string;

  @Column()
  public cost: number;

  @Column()
  public isBooked: boolean;
}

export default Post;