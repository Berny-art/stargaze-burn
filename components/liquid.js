import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function LiquidSupply() {
    const url = 'https://stargaze-api.polkachu.com/cosmos/staking/v1beta1/pool'

    const { data, error } = useSWR(url, fetcher)

    if (error) return <li className="w-[400px]">Failed to load /</li>
    if (!data) return <li className="w-[400px]">Loading... /</li>

    const liquid = (data.pool.not_bonded_tokens / 1000000).toLocaleString('en-US')

    return (
        <li className="w-[400px]">Liquid supply {liquid} /</li>
    );
};