import { OverflowMenuItem } from '@carbon/react';
import { launchWorkspace, showModal } from '@openmrs/esm-framework';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Order } from '../types/patient-queues';

interface PickReferralLabRequestActionMenuProps {
  order: Order;
}

const PickReferralLabRequestActionMenu: React.FC<PickReferralLabRequestActionMenuProps> = ({ order }) => {
  const { t } = useTranslation();

  const handleLaunchWorkspace = useCallback(() => {
    launchWorkspace('pick-referral-order-form-workspace', {
      order,
    });
  }, [order]);

  return (
    <OverflowMenuItem
      itemText={t('pickReferralLabRequest', 'Pick Lab Request')}
      onClick={handleLaunchWorkspace}
      style={{
        maxWidth: '100vw',
      }}
    />
  );
};

export default PickReferralLabRequestActionMenu;
