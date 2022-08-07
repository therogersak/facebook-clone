import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRecoilState } from "recoil";
import { uplodeState } from "../Atoms/UplodeAtom";
import { PlusIcon } from "@heroicons/react/outline";
import { storage, db } from "../firebaseConfig/firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { async } from "@firebase/util";
import { useSession } from "next-auth/react";

function ModalUplode() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(uplodeState);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState(null);

  

  const uploder = async () => {
    if (loading) return;
    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      name: session?.user?.name,
      username: "captainyadav",
      avatar: session?.user?.image,
      caption: caption,
      timestamp: serverTimestamp(),
    });

    const imgRef = ref(storage, `/posts/${docRef.id}/image`);

    await uploadString(imgRef, img, "data_url").then(async (snapshot) => {
      const downloadURL = await getDownloadURL(imgRef);

      await updateDoc(doc(db, "posts", docRef.id), {
        image: downloadURL,
      });
    });

    setImg(null);
    setOpen(false);
    setLoading(false);
    setCaption("");
  };

  const imgHandler = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImg(readerEvent.target.result);
    };
  };

  return (
    <>
      <div>
        <Transition appear show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={loading ? () => setOpen(true) : () => setOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full  max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <div>
                      <div className="flex items-center space-x-3">
                        <img
                          src="https://cdn.sharechat.com/cartoonimgs.._a0c117c_1603509293864_sc_cmprsd_40.jpg"
                          className="w-10 h-10 rounded-full"
                        />
                        <p>Captain Yadav</p>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="w-full py-[10px] border-none outline-none mt-2"
                          value={caption}
                          onChange={(e) => setCaption(e.target.value)}
                          placeholder="What's in your mind, Captain?"
                        />
                      </div>
                      {img ? (
                        <div className=" px-3 bg-gray-200 overflow-y-scroll py-2 rounded-md shadow-md scrollbar-thin h-[250px] scrollbar-thumb-black scrollbar-track-slate-400">
                          <div className="mt-2">
                            <img src={img} className="rounded-md" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-[200px] bg-gray-100 border rounded-md">
                          <label
                            htmlFor="img"
                            className="flex items-center justify-between w-full h-full"
                          >
                            <input
                              type="file"
                              name="img"
                              onChange={(e) => imgHandler(e)}
                              accept="image/*"
                              id="img"
                              hidden
                            />
                            <PlusIcon className="h-6 mx-auto" />
                          </label>
                        </div>
                      )}
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClose={() => setOpen(false)}
                        onClick={() => uploder()}
                      >
                        {loading ? "Uploding" : "Uplode"}
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}

export default ModalUplode;
