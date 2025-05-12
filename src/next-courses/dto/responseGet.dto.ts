import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ResponseGetDto {
    @Expose()
    title: string
    @Expose()
    date: Date
    @Expose()
    time: string
    @Expose()
    lugar: string
}