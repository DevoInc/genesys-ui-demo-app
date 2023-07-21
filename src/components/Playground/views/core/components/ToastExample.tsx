import {
  Button,
  Flex,
  HFlex,
  toast,
  ToastContainer,
} from '@devoinc/genesys-ui';
import { ToastStatus } from '@devoinc/genesys-ui/dist/types/src/components/Toast/declarations';

const lorem01 =
  'Phasellus hendrerit lacus ac nisl laoreet vulputate. Vestibulum vitae enim magna. Integer malesuada lacus et urna pellentesque, quis hendrerit purus sodales. Phasellus sagittis leo nec ornare congue. Quisque blandit tristique turpis, eget pretium orci bibendum sed. Aliquam imperdiet ultrices scelerisque. Vestibulum sit amet lorem cursus, auctor purus et, pretium velit.';

const statusToast: ToastStatus[] = ['error', 'info', 'success', 'warning'];

export const ToastExample = () => (
  <>
    <HFlex>
      {statusToast.map((status) => (
        <Flex.Item
          key={`default-toast--${status}`}
          id={`default-toast--${status}`}
        >
          <Button
            colorScheme={status}
            onClick={() =>
              toast({
                accent: false,
                actionApply: undefined,
                actionReject: undefined,
                collapsable: true,
                id: 'default-toast',
                maxHeight: undefined,
                content: lorem01,
                subtitle: 'Toasts notifications are useful',
                title: 'Notification title',
                status,
                closeToast: () => true,
              })
            }
          >
            {`Open ${status} notification`}
          </Button>
        </Flex.Item>
      ))}
    </HFlex>
    <ToastContainer />
  </>
);
