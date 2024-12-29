import { DeleteDialogProps } from "@/types/types";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

function DeleteDialog({ open, setOpen, idDelete }: DeleteDialogProps) {
  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center bg-black bg-opacity-50 p-4">
          <DialogPanel className="max-w-sm space-y-4 rounded-md border bg-white px-6 py-8 font-rubik">
            <DialogTitle className="text-2xl font-medium text-Neutral-DarkBlue">
              Delete comment
            </DialogTitle>
            <Description className="text-Neutral-GrayishBlue">
              Are you sure you want to delete this comment? This will remove the
              comment and can&apos;t be undone.
            </Description>

            <div className="flex justify-center gap-x-5">
              <button
                onClick={setOpen}
                className="rounded-md bg-Neutral-GrayishBlue px-8 py-3 text-Neutral-VeryLightGray"
              >
                NO, CANCEL
              </button>
              <button
                onClick={idDelete}
                className="rounded-md bg-Primary-SoftRed px-8 py-3 text-Neutral-VeryLightGray"
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
