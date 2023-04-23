import { BsPlus, BsTrash } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { DropdownIconProps } from '../../../../interfaces/interfaces';

export const AddIcon = () => {
  return <BsPlus style={{ color: 'var(--text)', fontSize: '28px' }} />;
};

export const TrashIcon = () => {
  return <BsTrash style={{ color: 'var(--text)', fontSize: '20px' }} />;
};

export const DropdownIconUp = ({ onClick }: DropdownIconProps) => {
  return (
    <RiArrowDropDownLine
      onClick={onClick}
      style={{
        color: 'var(--text)',
        fontSize: '36px',
        transform: 'rotate(180deg)',
      }}
    />
  );
};

export const DropdownIconDown = ({ onClick }: DropdownIconProps) => {
  return (
    <RiArrowDropDownLine
      onClick={onClick}
      style={{ color: 'var(--text)', fontSize: '36px' }}
    />
  );
};
