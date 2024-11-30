import { DeleteDialogProps } from "@/types/types";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

function DeleteDialog({ open, setOpen }: DeleteDialogProps) {
  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-50 ">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black bg-opacity-50">
          <DialogPanel className="max-w-sm space-y-4 border bg-white px-6 py-8 rounded-md font-rubik">
            <DialogTitle className="text-Neutral-DarkBlue text-2xl font-medium">
              Delete comment
            </DialogTitle>
            <Description className="text-Neutral-GrayishBlue">
              Are you sure you want to delete this comment? This will remove the
              comment and can&apos;t be undone.
            </Description>

            <div className="flex gap-x-5 justify-center">
              <button
                onClick={setOpen}
                className="bg-Neutral-GrayishBlue text-Neutral-VeryLightGray px-8 py-3 rounded-md"
              >
                NO, CANCEL
              </button>
              <button
                onClick={setOpen}
                className="text-Neutral-VeryLightGray bg-Primary-SoftRed px-8 py-3 rounded-md"
              >
                YES DELETE
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default DeleteDialog;
