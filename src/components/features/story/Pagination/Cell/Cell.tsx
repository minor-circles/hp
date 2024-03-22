import { Link } from '@/components/common/Link';
import { ConditionalLink } from '@/components/common/Link/ConditionalLink';
import { CellType } from '../types/cell';
import { StyledCell } from './StyledCell';

type Props = {
  cell: CellType;
  page: number;
  count: number;
  category: string;
};

export const Cell: React.VFC<Props> = ({ cell, page, count,category }) => {
  switch (cell) {
    case '<':
      return (
        <ConditionalLink condition={page > 1} href={`/posts/page/${page - 1}`}>
          <button type="button" aria-label="前に戻る" disabled={page === 1}>
            <StyledCell variant="arrow" disabled={page === 1}>
              {cell}
            </StyledCell>
          </button>
        </ConditionalLink>
      );
    case '>':
      return (
        <ConditionalLink
          condition={page < count}
          href={`/${category}/page/${page + 1}`}
        >
          <button type="button" aria-label="次に進む" disabled={page === count}>
            <StyledCell variant="arrow" disabled={page === count}>
              {cell}
            </StyledCell>
          </button>
        </ConditionalLink>
      );
    case '...':
      return <StyledCell variant="ellipsis">{cell}</StyledCell>;
    default:
      return (
        <Link href={`/${category}/page/${cell}`} passHref>
          <a>
            <StyledCell active={cell === page}>{cell}</StyledCell>
          </a>
        </Link>
      );
  }
};
