import clsx from 'clsx';

export default function WorkStatus({ type }: { type: string }) {
    return (
        <span
            className={clsx(
                'inline-flex items-center rounded-full px-2 py-1 text-xs',
                {
                    'bg-gray-100 text-gray-500': type === 'inactive',
                    'bg-green-500 text-white': type === 'live',
                },
            )}
        >
            {type === 'inactive' ? (
                <>
                    Inactive
                </>
            ) : null}
            {type === 'live' ? (
                <>
                    Live
                </>
            ) : null}
        </span>
    );
}
