import { lusitana } from '@/app/ui/fonts';
import YouTube from '@/app/ui/iFrames/youtube';
import NodeJS from '@/app/ui/iFrames/nodejs';
import ExpressJS from '@/app/ui/iFrames/expressjs';
import JWT from '@/app/ui/iFrames/jwt';
import Stripe from '@/app/ui/iFrames/stripe';

export default async function Page() {

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                APIs
            </h1>
            <YouTube />
            <NodeJS />
            <ExpressJS />
            <JWT />
            <Stripe />
        </main>
    );
}
