/**
 * @Project: learn-react
 * @Author: CHUNAM
 * @Date: 4/22/2025
 * @Time: 11:04 PM
 * @File: people.interface.ts
 */
interface Person {
    name: string;
    url: string;
    // … các trường khác nếu cần
}

interface SWPeopleResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Person[];
}

export type { Person, SWPeopleResponse };
