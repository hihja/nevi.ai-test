import { NextApiRequest } from 'next';

export const config = {
    api: {
        bodyParser: false,
    },
};

const ioHandler = (req: NextApiRequest) => {};

export default ioHandler;
