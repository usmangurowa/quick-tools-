import type { NextApiRequest, NextApiResponse } from 'next';

// const MTN = ['0803', '0703', '0903', '0806', '0706', '0813', '0810', '0814', '0816']; //01;
// const GLO = ['0805', '0705', '0905', '0807', '0815', '0811', '0905']; //02;
// const ETISALAT = ['0809', '0909', '0817', '0818']; //03;
// const AIRTEL = ['0802', '0902', '0701', '0808', '0708', '0812']; //04;

type PROVIDERSType = {
  MTN: string[];
  AIRTEL: string[];
  '9MOBILE': string[];
  GLO: string[];
};

type QueryType = {
  number: string;
};

const PROVIDERS: PROVIDERSType = {
  MTN: ['0803', '0703', '0903', '0806', '0706', '0813', '0810', '0814', '0816'],
  AIRTEL: ['0802', '0902', '0701', '0808', '0708', '0812'],
  GLO: ['0805', '0705', '0905', '0807', '0815', '0811', '0905'],
  '9MOBILE': ['0809', '0909', '0817', '0818'],
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { number }: { number?: string } = req.query;
  const _providers: any = Object.keys(PROVIDERS);
  if (number && number.length === 11) {
    let _provider: 'MTN' | 'AIRTEL' | 'GLO' | '9MOBILE' | '' = '';
    for (let x = 0; x < _providers.length; x++) {
      const provider: 'MTN' | 'AIRTEL' | 'GLO' | '9MOBILE' = _providers[x];
      if (PROVIDERS[provider].includes(number?.substring(0, 4))) {
        _provider = provider;
        break;
      }
    }
    if (_provider) {
      res.status(200).json({
        provider: _provider,
        number,
        error: false,
        message: `Gotcha!!!! the number is ${_provider}`,
      });
    } else {
      res
        .status(404)
        .json({ message: 'Could not find a provider for the number specified', error: true });
    }
  } else {
    res.status(400).json({ message: 'Number is invalid!!!', error: true });
  }
};
