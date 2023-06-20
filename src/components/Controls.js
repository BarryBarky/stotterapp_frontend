import {useEffect, useState} from "react";
import BasicIconButton from "./buttons/BasicIconButton";
import microphone from "../img/microphone.svg"
import audioRecorder from "../lib/audioRecording";
import {playAudio, stopAudio} from "../lib/playAudio";
import Recording from "./Recording";
import BasicTextButton from "./buttons/BasicTextButton";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";

const Controls = ({variantId, text, setIsTimerActive, isFinished, setIsFinished, title, skipLevel}) => {
    const [sentences, setSentences] = useState([]);
    const [words, setWords] = useState([]);
    const [sentenceCounter, setSentenceCounter] = useState(0);
    const [wordCounter, setWordCounter] = useState(0);
    const [isRecording, setIsRecording] = useState(false);


    const deleteAllTimeouts = () => {
        const highestId = window.setTimeout(() => {
            for (let i = highestId; i >= 0; i--) {
                window.clearInterval(i);
            }
        }, 0);
    }


    // variant 1
    useEffect(() => {
        if (isFinished) {
            setIsRecording(false)
            if (variantId === 1) {
                stopAudioRecording()
            }
        }
    }, [isFinished, isRecording])
    function startAudioRecording() {

        console.log("Recording Audio...");

        //start recording using the audio recording API
        audioRecorder.start()
            .then(() => { //on success
                // show is recording
                setIsTimerActive(true);
                setIsRecording(true);
            })
            .catch(error => { //on error
                console.error(error)
            });
    }

    /** Stop the currently started audio recording & sends it
     */
    function stopAudioRecording() {

        console.log("Stopping Audio Recording...");
        //stop the recording using the audio recording API
        audioRecorder.stop()
            .then(audioAsblob => {
                setIsRecording(false)
                const audioURL = URL.createObjectURL(audioAsblob);
                //Play recorder audio
                playAudio(audioURL);
            })
            .catch(error => {
                console.error(error)
            });
    }

    // variant 2
    const {
        transcript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    function generateSentences() {
        if (text) {
            setSentences(text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|"))
        }
    }

    function generateWords() {
        if (text) {
            setWords(sentences[sentenceCounter].split(' '))
        }
    }

    useEffect(() => {
        generateSentences()
    }, [text])

    useEffect(() => {
        generateWords()
    }, [sentences, sentenceCounter])

    function startTranscribe() {
        SpeechRecognition.startListening({continuous: true, language: 'nl-NL'})
        const validatedWord = words[wordCounter].replaceAll('.', '').replaceAll('!', '').replaceAll('?', '');
        if (transcript.substring(transcript.length - 20, transcript.length - 1).toLowerCase().includes(validatedWord.toLowerCase())) {
            if (wordCounter < (words.length - 1)) {
                setWordCounter(wordCounter + 1)
            } else {
                if (sentenceCounter < sentences.length - 1) {
                    setSentenceCounter(sentenceCounter + 1)
                    setWordCounter(0)
                } else {
                    setIsFinished(true)
                    setIsRecording(false)
                }

            }
        }


    }
    useEffect(() => {
        if (isRecording && variantId === 2) {
            startTranscribe()
        }
    }, [wordCounter, transcript, isRecording])

    function generatedText() {
        let text = [];
        for (let i = 0; i<sentenceCounter; i++) {
            text.push(
                <p className={"text-green w-full"}>
                    {sentences[i]}
                </p>
            );
        }

        for (let i = 0; i<words.length; i++) {
            text.push(
                <p className={`${i < wordCounter ? 'text-green' : ''}  w-full`}>
                    {words[i]}
                </p>
            );
        }


        return text
    }

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <section className={"w-full items-center bg-secondary border border-gray p-5 flex justify-between gap-5 md:gap-10 flex-col"}>
            <section className={"text-lg font-bold flex justify-center"}>
                <h1>{title}</h1>
            </section>
            <section className={"flex w-full flex-col rounded h-full text-md md:text-lg md:px-5"}>
                {
                    variantId === 1 ? text : generatedText()
                }
            </section>
            <section className={"flex justify-between order-first md:order-3"}>
                {isRecording ?
                    <section className={"flex gap-10"}>
                        <Recording/>
                    </section>
                    :
                    <section className={"flex gap-10 md:gap-20"}>
                        {isFinished ?
                            <>
                            <BasicTextButton text={"opnieuw proberen"} handler={() => {
                                setIsFinished(false)
                                setSentenceCounter(0);
                                setWordCounter(0);
                                stopAudio()
                                deleteAllTimeouts()
                            }}/>
                                <BasicTextButton text={"Skip Level"} handler={() => {
                                    stopAudio()
                                    deleteAllTimeouts()
                                    setIsFinished(false)
                                    skipLevel()
                                }}/>
                            </>
                            :
                            variantId === 1 ?
                                <BasicIconButton icon={microphone} handler={startAudioRecording} classes={"w-fit"}/>
                                : variantId === 2 ?
                                    <BasicIconButton
                                        icon={microphone}
                                        handler={() => {
                                            setIsRecording(true)
                                            setIsTimerActive(true);
                                        }}
                                        classes={"w-fit"}
                                    />
                                    :
                                    ""

                        }
                    </section>

                }
            </section>
        </section>
    );
};

export default Controls;